:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tmhg'
.. highlight: bash

tmhg
====

.. conda:recipe:: tmhg
   :replaces_section_title:
   :noindex:

   tMHG\-Finder is a tree\-guided tool to partition whole genomes into maximal homologous groups.

   :homepage: https://github.com/yongze-yin/tMHG-Finder
   :license: MIT / MIT
   :recipe: /`tmhg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tmhg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tmhg/meta.yaml>`_

   


.. conda:package:: tmhg

   |downloads_tmhg| |docker_tmhg|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends on bedtools: ``>=2.31.1``
   :depends on biopython: 
   :depends on blast: 
   :depends on dendropy: 
   :depends on mafft: 
   :depends on mash: 
   :depends on networkx: 
   :depends on numpy: ``>=1.11``
   :depends on pandas: ``>=1.1.3``
   :depends on pathos: 
   :depends on python: ``>=3.7``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install tmhg

to add into an existing workspace instead, run::

    pixi add tmhg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tmhg

Alternatively, to install into a new environment, run::

    conda create -n envname tmhg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tmhg:<tag>

(see `tmhg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tmhg| image:: https://img.shields.io/conda/dn/bioconda/tmhg.svg?style=flat
   :target: https://anaconda.org/bioconda/tmhg
   :alt:   (downloads)
.. |docker_tmhg| image:: https://quay.io/repository/biocontainers/tmhg/status
   :target: https://quay.io/repository/biocontainers/tmhg
.. _`tmhg/tags`: https://quay.io/repository/biocontainers/tmhg?tab=tags


.. raw:: html

    <script>
        var package = "tmhg";
        var versions = ["1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tmhg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tmhg/README.html