:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pftools'
.. highlight: bash

pftools
=======

.. conda:recipe:: pftools
   :replaces_section_title:
   :noindex:

   A generalized profile syntax for biomolecular sequence motifs and its function in automatic sequence interpretation.

   :homepage: https://web.expasy.org/pftools/
   :developer docs: https://github.com/sib-swiss/pftools3
   :license: GPL / GPLv2
   :recipe: /`pftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pftools/meta.yaml>`_

   


.. conda:package:: pftools

   |downloads_pftools| |docker_pftools|

   :versions:
      
      

      ``3.2.11-0``,  ``3.2.10-0``,  ``2.3.5-1``,  ``2.3.5-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-file-slurp: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pftools

   and update with::

      conda update pftools

   or use the docker container::

      docker pull quay.io/biocontainers/pftools:<tag>

   (see `pftools/tags`_ for valid values for ``<tag>``)


.. |downloads_pftools| image:: https://img.shields.io/conda/dn/bioconda/pftools.svg?style=flat
   :target: https://anaconda.org/bioconda/pftools
   :alt:   (downloads)
.. |docker_pftools| image:: https://quay.io/repository/biocontainers/pftools/status
   :target: https://quay.io/repository/biocontainers/pftools
.. _`pftools/tags`: https://quay.io/repository/biocontainers/pftools?tab=tags


.. raw:: html

    <script>
        var package = "pftools";
        var versions = ["3.2.11","3.2.10","2.3.5","2.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pftools/README.html