:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peregrine-2021'
.. highlight: bash

peregrine-2021
==============

.. conda:recipe:: peregrine-2021
   :replaces_section_title:
   :noindex:

   A genome assembler designed for long\-reads that have good enough accuracy

   :homepage: https://github.com/cschin/peregrine-2021
   :license: CC / CC BY-NC-SA 4.0
   :recipe: /`peregrine-2021 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peregrine-2021>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peregrine-2021/meta.yaml>`_

   


.. conda:package:: peregrine-2021

   |downloads_peregrine-2021| |docker_peregrine-2021|

   :versions:
      
      

      ``0.4.13-3``,  ``0.4.13-2``,  ``0.4.13-1``,  ``0.4.13-0``,  ``0.4.12-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends parallel: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install peregrine-2021

   and update with::

      conda update peregrine-2021

   or use the docker container::

      docker pull quay.io/biocontainers/peregrine-2021:<tag>

   (see `peregrine-2021/tags`_ for valid values for ``<tag>``)


.. |downloads_peregrine-2021| image:: https://img.shields.io/conda/dn/bioconda/peregrine-2021.svg?style=flat
   :target: https://anaconda.org/bioconda/peregrine-2021
   :alt:   (downloads)
.. |docker_peregrine-2021| image:: https://quay.io/repository/biocontainers/peregrine-2021/status
   :target: https://quay.io/repository/biocontainers/peregrine-2021
.. _`peregrine-2021/tags`: https://quay.io/repository/biocontainers/peregrine-2021?tab=tags


.. raw:: html

    <script>
        var package = "peregrine-2021";
        var versions = ["0.4.13","0.4.13","0.4.13","0.4.13","0.4.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peregrine-2021/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peregrine-2021/README.html