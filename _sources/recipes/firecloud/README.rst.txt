:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'firecloud'
.. highlight: bash

firecloud
=========

.. conda:recipe:: firecloud
   :replaces_section_title:
   :noindex:

   API and CLI for Broad Institute\'s Firecloud workspace\/workflow management service

   :homepage: https://github.com/broadinstitute/fiss
   :documentation: https://software.broadinstitute.org/firecloud/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`firecloud <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/firecloud>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/firecloud/meta.yaml>`_

   


.. conda:package:: firecloud

   |downloads_firecloud| |docker_firecloud|

   :versions:
      
      

      ``0.16.31-0``,  ``0.16.30-0``,  ``0.16.28-0``,  ``0.16.27-1``,  ``0.16.27-0``,  ``0.16.26-1``,  ``0.16.26-0``,  ``0.16.25-0``,  ``0.16.20-0``

      

   
   :depends google-auth: ``>=1.6.3``
   :depends google-cloud-sdk: 
   :depends pydot: 
   :depends python: 
   :depends requests: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install firecloud

   and update with::

      conda update firecloud

   or use the docker container::

      docker pull quay.io/biocontainers/firecloud:<tag>

   (see `firecloud/tags`_ for valid values for ``<tag>``)


.. |downloads_firecloud| image:: https://img.shields.io/conda/dn/bioconda/firecloud.svg?style=flat
   :target: https://anaconda.org/bioconda/firecloud
   :alt:   (downloads)
.. |docker_firecloud| image:: https://quay.io/repository/biocontainers/firecloud/status
   :target: https://quay.io/repository/biocontainers/firecloud
.. _`firecloud/tags`: https://quay.io/repository/biocontainers/firecloud?tab=tags


.. raw:: html

    <script>
        var package = "firecloud";
        var versions = ["0.16.31","0.16.30","0.16.28","0.16.27","0.16.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/firecloud/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/firecloud/README.html