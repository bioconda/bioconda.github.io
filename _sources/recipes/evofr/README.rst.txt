:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'evofr'
.. highlight: bash

evofr
=====

.. conda:recipe:: evofr
   :replaces_section_title:
   :noindex:

   Tools for evolutionary forecasting

   :homepage: https://github.com/blab/evofr
   :license: AGPL-3.0
   :recipe: /`evofr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evofr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evofr/meta.yaml>`_

   


.. conda:package:: evofr

   |downloads_evofr| |docker_evofr|

   :versions:
      
      

      ``0.1.18-1``,  ``0.1.18-0``,  ``0.1.17-0``,  ``0.1.16-0``,  ``0.1.15-0``,  ``0.1.14-0``

      

   
   :depends blackjax: ``>=0.9.6,<0.10.0``
   :depends jax: ``>=0.3.13,<0.4.0``
   :depends jaxlib: ``>=0.3.10,<0.4.0``
   :depends numpy: ``>=1.22.4,<2``
   :depends numpyro: ``>=0.9.2,<0.10.0``
   :depends pandas: ``>=1.4.2,<2``
   :depends python: ``>=3.9,<4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install evofr

   and update with::

      conda update evofr

   or use the docker container::

      docker pull quay.io/biocontainers/evofr:<tag>

   (see `evofr/tags`_ for valid values for ``<tag>``)


.. |downloads_evofr| image:: https://img.shields.io/conda/dn/bioconda/evofr.svg?style=flat
   :target: https://anaconda.org/bioconda/evofr
   :alt:   (downloads)
.. |docker_evofr| image:: https://quay.io/repository/biocontainers/evofr/status
   :target: https://quay.io/repository/biocontainers/evofr
.. _`evofr/tags`: https://quay.io/repository/biocontainers/evofr?tab=tags


.. raw:: html

    <script>
        var package = "evofr";
        var versions = ["0.1.18","0.1.18","0.1.17","0.1.16","0.1.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/evofr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/evofr/README.html