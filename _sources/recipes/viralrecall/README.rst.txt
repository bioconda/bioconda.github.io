:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viralrecall'
.. highlight: bash

viralrecall
===========

.. conda:recipe:: viralrecall
   :replaces_section_title:
   :noindex:

   Tool to identify giant viruses integrated into eukaryotic genomes

   :homepage: https://github.com/abdealijivaji/ViralRecall_3.0
   :license: MIT / MIT
   :recipe: /`viralrecall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viralrecall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viralrecall/meta.yaml>`_

   


.. conda:package:: viralrecall

   |downloads_viralrecall| |docker_viralrecall|

   :versions:
      
      

      ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``

      

   
   :depends on matplotlib-base: ``>=3.10,<3.11``
   :depends on numpy: ``>=2.2,<2.3``
   :depends on pandas: ``>=2.2,<2.3``
   :depends on progressbar: ``>=2.5``
   :depends on pyfaidx: ``0.9.0``
   :depends on pyhmmer: ``>=0.11.3``
   :depends on pyrodigal-gv: ``>=0.3``
   :depends on python: ``>=3.10,<3.14``
   :depends on requests: ``>=2.32,<2.33``

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

    pixi global install viralrecall

to add into an existing workspace instead, run::

    pixi add viralrecall

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install viralrecall

Alternatively, to install into a new environment, run::

    conda create -n envname viralrecall

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/viralrecall:<tag>

(see `viralrecall/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_viralrecall| image:: https://img.shields.io/conda/dn/bioconda/viralrecall.svg?style=flat
   :target: https://anaconda.org/bioconda/viralrecall
   :alt:   (downloads)
.. |docker_viralrecall| image:: https://quay.io/repository/biocontainers/viralrecall/status
   :target: https://quay.io/repository/biocontainers/viralrecall
.. _`viralrecall/tags`: https://quay.io/repository/biocontainers/viralrecall?tab=tags


.. raw:: html

    <script>
        var package = "viralrecall";
        var versions = ["3.0.3","3.0.2","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viralrecall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viralrecall/README.html