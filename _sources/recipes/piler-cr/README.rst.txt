:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piler-cr'
.. highlight: bash

piler-cr
========

.. conda:recipe:: piler-cr
   :replaces_section_title:
   :noindex:

   Identification and analysis of CRISPR repeats.

   :homepage: http://www.drive5.com/pilercr/
   :license: Public Domain
   :recipe: /`piler-cr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piler-cr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piler-cr/meta.yaml>`_

   


.. conda:package:: piler-cr

   |downloads_piler-cr| |docker_piler-cr|

   :versions:
      
      

      ``1.06-1``,  ``1.06-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install piler-cr

   and update with::

      conda update piler-cr

   or use the docker container::

      docker pull quay.io/biocontainers/piler-cr:<tag>

   (see `piler-cr/tags`_ for valid values for ``<tag>``)


.. |downloads_piler-cr| image:: https://img.shields.io/conda/dn/bioconda/piler-cr.svg?style=flat
   :target: https://anaconda.org/bioconda/piler-cr
   :alt:   (downloads)
.. |docker_piler-cr| image:: https://quay.io/repository/biocontainers/piler-cr/status
   :target: https://quay.io/repository/biocontainers/piler-cr
.. _`piler-cr/tags`: https://quay.io/repository/biocontainers/piler-cr?tab=tags


.. raw:: html

    <script>
        var package = "piler-cr";
        var versions = ["1.06","1.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piler-cr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piler-cr/README.html