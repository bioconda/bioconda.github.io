:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'preface'
.. highlight: bash

preface
=======

.. conda:recipe:: preface
   :replaces_section_title:
   :noindex:

   PREFACE \-\- PREdict FetAl ComponEnt

   :homepage: https://github.com/CenterForMedicalGeneticsGhent/PREFACE
   :license: GPLv3
   :recipe: /`preface <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/preface>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/preface/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1002/pd.5508`

   


.. conda:package:: preface

   |downloads_preface| |docker_preface|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends on r-base: 
   :depends on r-data.table: ``>=1.1.18``
   :depends on r-doparallel: ``>=1.0.14``
   :depends on r-foreach: ``>=1.4.4``
   :depends on r-glmnet: ``>=2.0_16``
   :depends on r-irlba: ``>=2.3.3``
   :depends on r-mass: ``>=7.3_49``
   :depends on r-neuralnet: ``>=1.44.2``

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

    pixi global install preface

to add into an existing workspace instead, run::

    pixi add preface

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install preface

Alternatively, to install into a new environment, run::

    conda create -n envname preface

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/preface:<tag>

(see `preface/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_preface| image:: https://img.shields.io/conda/dn/bioconda/preface.svg?style=flat
   :target: https://anaconda.org/bioconda/preface
   :alt:   (downloads)
.. |docker_preface| image:: https://quay.io/repository/biocontainers/preface/status
   :target: https://quay.io/repository/biocontainers/preface
.. _`preface/tags`: https://quay.io/repository/biocontainers/preface?tab=tags


.. raw:: html

    <script>
        var package = "preface";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/preface/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/preface/README.html