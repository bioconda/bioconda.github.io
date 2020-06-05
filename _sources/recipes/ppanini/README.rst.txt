:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ppanini'
.. highlight: bash

ppanini
=======

.. conda:recipe:: ppanini
   :replaces_section_title:
   :noindex:

   PPANINI\: Prioritization and Prediction of functional Annotations for Novel and Important genes via automated data Network Integration.

   :homepage: http://huttenhower.sph.harvard.edu/ppanini
   :license: MIT
   :recipe: /`ppanini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppanini>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppanini/meta.yaml>`_

   


.. conda:package:: ppanini

   |downloads_ppanini| |docker_ppanini|

   :versions:
      
      

      ``0.7.4-0``,  ``0.6.4-2``,  ``0.6.4-0``,  ``0.6.2-0``

      

   
   :depends biopython: ``>=1.66``
   :depends matplotlib: ``>=2.0.2``
   :depends numpy: ``>=1.9.2``
   :depends pandas: ``>=0.18.1``
   :depends python: ``<3``
   :depends scikit-learn: ``>=0.14.1``
   :depends scipy: ``>=0.13.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ppanini

   and update with::

      conda update ppanini

   or use the docker container::

      docker pull quay.io/biocontainers/ppanini:<tag>

   (see `ppanini/tags`_ for valid values for ``<tag>``)


.. |downloads_ppanini| image:: https://img.shields.io/conda/dn/bioconda/ppanini.svg?style=flat
   :target: https://anaconda.org/bioconda/ppanini
   :alt:   (downloads)
.. |docker_ppanini| image:: https://quay.io/repository/biocontainers/ppanini/status
   :target: https://quay.io/repository/biocontainers/ppanini
.. _`ppanini/tags`: https://quay.io/repository/biocontainers/ppanini?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ppanini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ppanini/README.html