:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hlafreq'
.. highlight: bash

hlafreq
=======

.. conda:recipe:: hlafreq
   :replaces_section_title:
   :noindex:

   Download and combine HLA frequency data from multiple studies

   :homepage: https://github.com/Vaccitech/HLAfreq
   :license: MIT / MIT
   :recipe: /`hlafreq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hlafreq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hlafreq/meta.yaml>`_

   


.. conda:package:: hlafreq

   |downloads_hlafreq| |docker_hlafreq|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends arviz: 
   :depends bs4: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pymc: ``>=3``
   :depends python: ``>=3.8``
   :depends requests: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hlafreq

   and update with::

      conda update hlafreq

   or use the docker container::

      docker pull quay.io/biocontainers/hlafreq:<tag>

   (see `hlafreq/tags`_ for valid values for ``<tag>``)


.. |downloads_hlafreq| image:: https://img.shields.io/conda/dn/bioconda/hlafreq.svg?style=flat
   :target: https://anaconda.org/bioconda/hlafreq
   :alt:   (downloads)
.. |docker_hlafreq| image:: https://quay.io/repository/biocontainers/hlafreq/status
   :target: https://quay.io/repository/biocontainers/hlafreq
.. _`hlafreq/tags`: https://quay.io/repository/biocontainers/hlafreq?tab=tags


.. raw:: html

    <script>
        var package = "hlafreq";
        var versions = ["0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hlafreq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hlafreq/README.html