:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'raxml-ng'
.. highlight: bash

raxml-ng
========

.. conda:recipe:: raxml-ng
   :replaces_section_title:
   :noindex:

   RAxML Next Generation\: faster\, easier\-to\-use and more flexible

   :homepage: https://github.com/amkozlov/raxml-ng
   :license: AGPL / AGPL-3
   :recipe: /`raxml-ng <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raxml-ng>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raxml-ng/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz305`

   


.. conda:package:: raxml-ng

   |downloads_raxml-ng| |docker_raxml-ng|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``

      

   
   :depends gmp: ``>=6.2.1,<7.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends openmpi: ``>=4.1.2,<5.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install raxml-ng

   and update with::

      conda update raxml-ng

   or use the docker container::

      docker pull quay.io/biocontainers/raxml-ng:<tag>

   (see `raxml-ng/tags`_ for valid values for ``<tag>``)


.. |downloads_raxml-ng| image:: https://img.shields.io/conda/dn/bioconda/raxml-ng.svg?style=flat
   :target: https://anaconda.org/bioconda/raxml-ng
   :alt:   (downloads)
.. |docker_raxml-ng| image:: https://quay.io/repository/biocontainers/raxml-ng/status
   :target: https://quay.io/repository/biocontainers/raxml-ng
.. _`raxml-ng/tags`: https://quay.io/repository/biocontainers/raxml-ng?tab=tags


.. raw:: html

    <script>
        var package = "raxml-ng";
        var versions = ["1.1.0","1.1.0","1.0.3","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/raxml-ng/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/raxml-ng/README.html