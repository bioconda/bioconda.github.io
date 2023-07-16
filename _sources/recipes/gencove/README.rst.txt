:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gencove'
.. highlight: bash

gencove
=======

.. conda:recipe:: gencove
   :replaces_section_title:
   :noindex:

   Gencove is a high\-throughput\, cost\-effective platform for genome sequencing and analysis. This command\-line interface can be used to easily access the Gencove API.

   :homepage: https://docs.gencove.com
   :license: Apache-2.0
   :recipe: /`gencove <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gencove>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gencove/meta.yaml>`_

   


.. conda:package:: gencove

   |downloads_gencove| |docker_gencove|

   :versions:
      
      

      ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.7-0``,  ``2.4.6-0``,  ``2.4.5-0``,  ``2.4.3-0``

      

   
   :depends backoff: ``1.11.0``
   :depends boto3: ``>=1.17.97``
   :depends click: ``>=7.0``
   :depends progressbar2: ``3.55.0``
   :depends pydantic: ``1.9.2``
   :depends pytest-runner: 
   :depends python: ``>=3.7``
   :depends python-dateutil: ``>=2.2.0``
   :depends requests: ``>=2.19.1``
   :depends six: ``>=1.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gencove

   and update with::

      conda update gencove

   or use the docker container::

      docker pull quay.io/biocontainers/gencove:<tag>

   (see `gencove/tags`_ for valid values for ``<tag>``)


.. |downloads_gencove| image:: https://img.shields.io/conda/dn/bioconda/gencove.svg?style=flat
   :target: https://anaconda.org/bioconda/gencove
   :alt:   (downloads)
.. |docker_gencove| image:: https://quay.io/repository/biocontainers/gencove/status
   :target: https://quay.io/repository/biocontainers/gencove
.. _`gencove/tags`: https://quay.io/repository/biocontainers/gencove?tab=tags


.. raw:: html

    <script>
        var package = "gencove";
        var versions = ["2.5.2","2.5.1","2.5.0","2.4.7","2.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gencove/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gencove/README.html