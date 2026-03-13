:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meta_eukaryome_detect'
.. highlight: bash

meta_eukaryome_detect
=====================

.. conda:recipe:: meta_eukaryome_detect
   :replaces_section_title:
   :noindex:

   Pathogen\, Parasite\, Eukaryote and Virus detection in metagenomes.

   :homepage: https://github.com/grp-bork/meta_eukaryome_detect
   :documentation: https://grp-bork.embl-community.io/grp-microbiome-astrology/meta_eukaryome_detect/
   
   :license: MIT / MIT License
   :recipe: /`meta_eukaryome_detect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta_eukaryome_detect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta_eukaryome_detect/meta.yaml>`_

   


.. conda:package:: meta_eukaryome_detect

   |downloads_meta_eukaryome_detect| |docker_meta_eukaryome_detect|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends on ngless: 
   :depends on pandas: ``>=2.0``
   :depends on python: 
   :depends on requests: 
   :depends on samtools: 

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

    pixi global install meta_eukaryome_detect

to add into an existing workspace instead, run::

    pixi add meta_eukaryome_detect

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install meta_eukaryome_detect

Alternatively, to install into a new environment, run::

    conda create -n envname meta_eukaryome_detect

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/meta_eukaryome_detect:<tag>

(see `meta_eukaryome_detect/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_meta_eukaryome_detect| image:: https://img.shields.io/conda/dn/bioconda/meta_eukaryome_detect.svg?style=flat
   :target: https://anaconda.org/bioconda/meta_eukaryome_detect
   :alt:   (downloads)
.. |docker_meta_eukaryome_detect| image:: https://quay.io/repository/biocontainers/meta_eukaryome_detect/status
   :target: https://quay.io/repository/biocontainers/meta_eukaryome_detect
.. _`meta_eukaryome_detect/tags`: https://quay.io/repository/biocontainers/meta_eukaryome_detect?tab=tags


.. raw:: html

    <script>
        var package = "meta_eukaryome_detect";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meta_eukaryome_detect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meta_eukaryome_detect/README.html