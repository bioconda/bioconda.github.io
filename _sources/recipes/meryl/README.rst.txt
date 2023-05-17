:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meryl'
.. highlight: bash

meryl
=====

.. conda:recipe:: meryl
   :replaces_section_title:
   :noindex:

   meryl is a multi\-threaded\, multi\-process\, out\-of\-core k\-mer counter

   :homepage: https://github.com/marbl/meryl
   :license: LicenseRef-Public-Domain AND MIT AND RSA-MD AND BSD-3-Clause AND BSD-2-Clause AND LicenseRef-parasail
   :recipe: /`meryl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meryl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meryl/meta.yaml>`_

   


.. conda:package:: meryl

   |downloads_meryl| |docker_meryl|

   :versions:
      
      

      ``2013-0``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2-1``,  ``1.2-0``,  ``v1.0-0``

      

   
   :depends libgcc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install meryl

   and update with::

      conda update meryl

   or use the docker container::

      docker pull quay.io/biocontainers/meryl:<tag>

   (see `meryl/tags`_ for valid values for ``<tag>``)


.. |downloads_meryl| image:: https://img.shields.io/conda/dn/bioconda/meryl.svg?style=flat
   :target: https://anaconda.org/bioconda/meryl
   :alt:   (downloads)
.. |docker_meryl| image:: https://quay.io/repository/biocontainers/meryl/status
   :target: https://quay.io/repository/biocontainers/meryl
.. _`meryl/tags`: https://quay.io/repository/biocontainers/meryl?tab=tags


.. raw:: html

    <script>
        var package = "meryl";
        var versions = ["2013","1.3","1.3","1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meryl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meryl/README.html