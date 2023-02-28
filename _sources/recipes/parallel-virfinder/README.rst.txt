:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parallel-virfinder'
.. highlight: bash

parallel-virfinder
==================

.. conda:recipe:: parallel-virfinder
   :replaces_section_title:
   :noindex:

   parallel\-virfinder\, split virfinder execution in chuncks

   :homepage: https://github.com/quadram-institute-bioscience/parallel-virfinder
   :license: Apache 2.0
   :recipe: /`parallel-virfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parallel-virfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parallel-virfinder/meta.yaml>`_

   


.. conda:package:: parallel-virfinder

   |downloads_parallel-virfinder| |docker_parallel-virfinder|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends python: ``>=3.6``
   :depends r-virfinder: ``1.1.*``
   :depends rich: 
   :depends seqfu: ``>=1.14.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install parallel-virfinder

   and update with::

      conda update parallel-virfinder

   or use the docker container::

      docker pull quay.io/biocontainers/parallel-virfinder:<tag>

   (see `parallel-virfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_parallel-virfinder| image:: https://img.shields.io/conda/dn/bioconda/parallel-virfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/parallel-virfinder
   :alt:   (downloads)
.. |docker_parallel-virfinder| image:: https://quay.io/repository/biocontainers/parallel-virfinder/status
   :target: https://quay.io/repository/biocontainers/parallel-virfinder
.. _`parallel-virfinder/tags`: https://quay.io/repository/biocontainers/parallel-virfinder?tab=tags


.. raw:: html

    <script>
        var package = "parallel-virfinder";
        var versions = ["0.3.1","0.3.0","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parallel-virfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parallel-virfinder/README.html