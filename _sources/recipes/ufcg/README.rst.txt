:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ufcg'
.. highlight: bash

ufcg
====

.. conda:recipe:: ufcg
   :replaces_section_title:
   :noindex:

   UFCG pipeline provides methods for a genome\-wide taxonomic profiling and annotation of your own biological sequences of Fungi.

   :homepage: https://ufcg.steineggerlab.com
   :developer docs: https://github.com/steineggerlab/ufcg
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`ufcg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ufcg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ufcg/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkac894`

   


.. conda:package:: ufcg

   |downloads_ufcg| |docker_ufcg|

   :versions:
      
      

      ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3c-0``

      

   
   :depends on augustus: ``>=3.5.0``
   :depends on iqtree: 
   :depends on mafft: 
   :depends on mmseqs2: ``>=14.7e284``
   :depends on openjdk: ``>=8``

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

    pixi global install ufcg

to add into an existing workspace instead, run::

    pixi add ufcg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ufcg

Alternatively, to install into a new environment, run::

    conda create -n envname ufcg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ufcg:<tag>

(see `ufcg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ufcg| image:: https://img.shields.io/conda/dn/bioconda/ufcg.svg?style=flat
   :target: https://anaconda.org/bioconda/ufcg
   :alt:   (downloads)
.. |docker_ufcg| image:: https://quay.io/repository/biocontainers/ufcg/status
   :target: https://quay.io/repository/biocontainers/ufcg
.. _`ufcg/tags`: https://quay.io/repository/biocontainers/ufcg?tab=tags


.. raw:: html

    <script>
        var package = "ufcg";
        var versions = ["1.0.6","1.0.5","1.0.4","1.0.3c"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ufcg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ufcg/README.html