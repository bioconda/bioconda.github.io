:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'teexpo'
.. highlight: bash

teexpo
======

.. conda:recipe:: teexpo
   :replaces_section_title:
   :noindex:

   TEexpo\: Automated and curated transposable element annotation pipeline developed by Swarup Das and Subarna Thakur

   :homepage: https://github.com/ausswal/TEexpo
   :license: MIT
   :recipe: /`teexpo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/teexpo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/teexpo/meta.yaml>`_

   


.. conda:package:: teexpo

   |downloads_teexpo| |docker_teexpo|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bedtools: 
   :depends on cd-hit: 
   :depends on emboss: 
   :depends on genometools-genometools: ``>=1.6.5``
   :depends on hmmer: ``>=3.3``
   :depends on mafft: 
   :depends on matplotlib-base: 
   :depends on pandas: 
   :depends on pyfiglet: 
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on repeatmasker: 
   :depends on repeatmodeler: 
   :depends on samtools: 
   :depends on seqkit: 
   :depends on transposonpsi: 
   :depends on trimal: 
   :depends on trnascan-se: 
   :depends on vsearch: 

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

    pixi global install teexpo

to add into an existing workspace instead, run::

    pixi add teexpo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install teexpo

Alternatively, to install into a new environment, run::

    conda create -n envname teexpo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/teexpo:<tag>

(see `teexpo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_teexpo| image:: https://img.shields.io/conda/dn/bioconda/teexpo.svg?style=flat
   :target: https://anaconda.org/bioconda/teexpo
   :alt:   (downloads)
.. |docker_teexpo| image:: https://quay.io/repository/biocontainers/teexpo/status
   :target: https://quay.io/repository/biocontainers/teexpo
.. _`teexpo/tags`: https://quay.io/repository/biocontainers/teexpo?tab=tags


.. raw:: html

    <script>
        var package = "teexpo";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/teexpo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/teexpo/README.html