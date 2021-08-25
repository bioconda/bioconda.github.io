:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioutils'
.. highlight: bash

bioutils
========

.. conda:recipe:: bioutils
   :replaces_section_title:
   :noindex:

   miscellaneous simple bioinformatics utilities and lookup tables

   :homepage: https://github.com/biocommons/bioutils
   :license: APACHE / Apache Software
   :recipe: /`bioutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioutils/meta.yaml>`_

   


.. conda:package:: bioutils

   |downloads_bioutils| |docker_bioutils|

   :versions:
      
      

      ``0.5.5-0``

      

   
   :depends attrs: 
   :depends python: ``>=3.6``
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioutils

   and update with::

      conda update bioutils

   or use the docker container::

      docker pull quay.io/biocontainers/bioutils:<tag>

   (see `bioutils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioutils| image:: https://img.shields.io/conda/dn/bioconda/bioutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioutils
   :alt:   (downloads)
.. |docker_bioutils| image:: https://quay.io/repository/biocontainers/bioutils/status
   :target: https://quay.io/repository/biocontainers/bioutils
.. _`bioutils/tags`: https://quay.io/repository/biocontainers/bioutils?tab=tags


.. raw:: html

    <script>
        var package = "bioutils";
        var versions = ["0.5.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioutils/README.html