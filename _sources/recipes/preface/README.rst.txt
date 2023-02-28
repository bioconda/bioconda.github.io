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

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install preface

   and update with::

      conda update preface

   or use the docker container::

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