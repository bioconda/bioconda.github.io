:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scoary'
.. highlight: bash

scoary
======

.. conda:recipe:: scoary
   :replaces_section_title:
   :noindex:

   Microbial pan\-GWAS using the output from Roary

   :homepage: https://github.com/AdmiralenOla/Scoary
   :license: GPL / GPL-3.0
   :recipe: /`scoary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scoary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scoary/meta.yaml>`_
   :links: biotools: :biotools:`Scoary`, doi: :doi:`10.1186/s13059-016-1108-8`

   


.. conda:package:: scoary

   |downloads_scoary| |docker_scoary|

   :versions:
      
      

      ``1.6.16-2``,  ``1.6.16-1``,  ``1.6.16-0``,  ``1.6.9-0``

      

   
   :depends on argparse: 
   :depends on ete3: 
   :depends on python: 
   :depends on scipy: ``>=0.16``
   :depends on six: 

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

    pixi global install scoary

to add into an existing workspace instead, run::

    pixi add scoary

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scoary

Alternatively, to install into a new environment, run::

    conda create -n envname scoary

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scoary:<tag>

(see `scoary/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scoary| image:: https://img.shields.io/conda/dn/bioconda/scoary.svg?style=flat
   :target: https://anaconda.org/bioconda/scoary
   :alt:   (downloads)
.. |docker_scoary| image:: https://quay.io/repository/biocontainers/scoary/status
   :target: https://quay.io/repository/biocontainers/scoary
.. _`scoary/tags`: https://quay.io/repository/biocontainers/scoary?tab=tags


.. raw:: html

    <script>
        var package = "scoary";
        var versions = ["1.6.16","1.6.16","1.6.16","1.6.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scoary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scoary/README.html