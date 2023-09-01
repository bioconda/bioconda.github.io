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

      

   
   :depends r-base: 
   :depends r-data.table: ``>=1.1.18``
   :depends r-doparallel: ``>=1.0.14``
   :depends r-foreach: ``>=1.4.4``
   :depends r-glmnet: ``>=2.0_16``
   :depends r-irlba: ``>=2.3.3``
   :depends r-mass: ``>=7.3_49``
   :depends r-neuralnet: ``>=1.44.2``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install preface

   and update with::

      mamba update preface

  To create a new environment, run::

      mamba create --name myenvname preface

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/preface:<tag>

   (see `preface/tags`_ for valid values for ``<tag>``)


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