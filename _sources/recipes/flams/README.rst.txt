:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flams'
.. highlight: bash

flams
=====

.. conda:recipe:: flams
   :replaces_section_title:
   :noindex:

   Find Lysine Acylation \& other Modification Sites

   :homepage: https://github.com/hannelorelongin/FLAMS
   :license: MIT
   :recipe: /`flams <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flams>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flams/meta.yaml>`_

   


.. conda:package:: flams

   |downloads_flams| |docker_flams|

   :versions:
      
      

      ``0.0.8-0``,  ``0.0.6-0``

      

   
   :depends appdirs: ``1.4.4``
   :depends biopython: ``1.81``
   :depends blast: ``2.13.0``
   :depends certifi: ``2023.5.7``
   :depends charset-normalizer: ``3.1.0``
   :depends idna: ``3.4``
   :depends numpy: ``1.24.3``
   :depends python: ``>=3.10``
   :depends requests: ``2.31.0``
   :depends urllib3: ``2.0.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install flams

   and update with::

      conda update flams

   or use the docker container::

      docker pull quay.io/biocontainers/flams:<tag>

   (see `flams/tags`_ for valid values for ``<tag>``)


.. |downloads_flams| image:: https://img.shields.io/conda/dn/bioconda/flams.svg?style=flat
   :target: https://anaconda.org/bioconda/flams
   :alt:   (downloads)
.. |docker_flams| image:: https://quay.io/repository/biocontainers/flams/status
   :target: https://quay.io/repository/biocontainers/flams
.. _`flams/tags`: https://quay.io/repository/biocontainers/flams?tab=tags


.. raw:: html

    <script>
        var package = "flams";
        var versions = ["0.0.8","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flams/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flams/README.html