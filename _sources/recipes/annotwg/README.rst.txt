:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'annotwg'
.. highlight: bash

annotwg
=======

.. conda:recipe:: annotwg
   :replaces_section_title:
   :noindex:

   Tool for annotating large VCF files

   :homepage: https://gitlab.com/cnrgh/annotwg
   :license: CeCILL
   :recipe: /`annotwg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annotwg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annotwg/meta.yaml>`_

   


.. conda:package:: annotwg

   |downloads_annotwg| |docker_annotwg|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends on bash: 
   :depends on bcftools: 
   :depends on coreutils: 
   :depends on gawk: 
   :depends on grep: 
   :depends on htslib: 

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

    pixi global install annotwg

to add into an existing workspace instead, run::

    pixi add annotwg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install annotwg

Alternatively, to install into a new environment, run::

    conda create -n envname annotwg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/annotwg:<tag>

(see `annotwg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_annotwg| image:: https://img.shields.io/conda/dn/bioconda/annotwg.svg?style=flat
   :target: https://anaconda.org/bioconda/annotwg
   :alt:   (downloads)
.. |docker_annotwg| image:: https://quay.io/repository/biocontainers/annotwg/status
   :target: https://quay.io/repository/biocontainers/annotwg
.. _`annotwg/tags`: https://quay.io/repository/biocontainers/annotwg?tab=tags


.. raw:: html

    <script>
        var package = "annotwg";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/annotwg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/annotwg/README.html