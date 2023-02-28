:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'consent'
.. highlight: bash

consent
=======

.. conda:recipe:: consent
   :replaces_section_title:
   :noindex:

   Scalable long read self\-correction and assembly polishing with multiple sequence alignment

   :homepage: https://github.com/morispi/CONSENT
   :license: AGPL / AGPL-3.0
   :recipe: /`consent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consent/meta.yaml>`_

   


.. conda:package:: consent

   |downloads_consent| |docker_consent|

   :versions:
      
      

      ``2.2.2-2``,  ``2.2.2-1``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2-0``,  ``2.1-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends minimap2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install consent

   and update with::

      conda update consent

   or use the docker container::

      docker pull quay.io/biocontainers/consent:<tag>

   (see `consent/tags`_ for valid values for ``<tag>``)


.. |downloads_consent| image:: https://img.shields.io/conda/dn/bioconda/consent.svg?style=flat
   :target: https://anaconda.org/bioconda/consent
   :alt:   (downloads)
.. |docker_consent| image:: https://quay.io/repository/biocontainers/consent/status
   :target: https://quay.io/repository/biocontainers/consent
.. _`consent/tags`: https://quay.io/repository/biocontainers/consent?tab=tags


.. raw:: html

    <script>
        var package = "consent";
        var versions = ["2.2.2","2.2.2","2.2.2","2.2.1","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/consent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/consent/README.html