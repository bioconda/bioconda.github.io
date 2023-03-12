:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unikseq'
.. highlight: bash

unikseq
=======

.. conda:recipe:: unikseq
   :replaces_section_title:
   :noindex:

   Unique DNA sequence region identification\, using a k\-mer approach

   :homepage: https://github.com/bcgsc/unikseq
   :license: GPL-3.0
   :recipe: /`unikseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unikseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unikseq/meta.yaml>`_

   


.. conda:package:: unikseq

   |downloads_unikseq| |docker_unikseq|

   :versions:
      
      

      ``1.3.1-0``,  ``1.0.0-0``

      

   
   :depends links: ``1.8.7.*``
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install unikseq

   and update with::

      conda update unikseq

   or use the docker container::

      docker pull quay.io/biocontainers/unikseq:<tag>

   (see `unikseq/tags`_ for valid values for ``<tag>``)


.. |downloads_unikseq| image:: https://img.shields.io/conda/dn/bioconda/unikseq.svg?style=flat
   :target: https://anaconda.org/bioconda/unikseq
   :alt:   (downloads)
.. |docker_unikseq| image:: https://quay.io/repository/biocontainers/unikseq/status
   :target: https://quay.io/repository/biocontainers/unikseq
.. _`unikseq/tags`: https://quay.io/repository/biocontainers/unikseq?tab=tags


.. raw:: html

    <script>
        var package = "unikseq";
        var versions = ["1.3.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unikseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unikseq/README.html