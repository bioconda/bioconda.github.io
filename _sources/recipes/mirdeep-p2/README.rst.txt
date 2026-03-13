:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirdeep-p2'
.. highlight: bash

mirdeep-p2
==========

.. conda:recipe:: mirdeep-p2
   :replaces_section_title:
   :noindex:

   A fast and accurate tool for analyzing the miRNA transcriptome in plants

   :homepage: https://sourceforge.net/projects/mirdp2/
   :license: GNU General Public v3 (GPLv3)
   :recipe: /`mirdeep-p2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirdeep-p2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirdeep-p2/meta.yaml>`_

   


.. conda:package:: mirdeep-p2

   |downloads_mirdeep-p2| |docker_mirdeep-p2|

   :versions:
      
      

      ``1.1.4-0``

      

   
   :depends on bowtie: 
   :depends on bowtie2: 
   :depends on perl: 
   :depends on randfold: 
   :depends on viennarna: 

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

    pixi global install mirdeep-p2

to add into an existing workspace instead, run::

    pixi add mirdeep-p2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mirdeep-p2

Alternatively, to install into a new environment, run::

    conda create -n envname mirdeep-p2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mirdeep-p2:<tag>

(see `mirdeep-p2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mirdeep-p2| image:: https://img.shields.io/conda/dn/bioconda/mirdeep-p2.svg?style=flat
   :target: https://anaconda.org/bioconda/mirdeep-p2
   :alt:   (downloads)
.. |docker_mirdeep-p2| image:: https://quay.io/repository/biocontainers/mirdeep-p2/status
   :target: https://quay.io/repository/biocontainers/mirdeep-p2
.. _`mirdeep-p2/tags`: https://quay.io/repository/biocontainers/mirdeep-p2?tab=tags


.. raw:: html

    <script>
        var package = "mirdeep-p2";
        var versions = ["1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirdeep-p2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirdeep-p2/README.html