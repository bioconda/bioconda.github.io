:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mammal'
.. highlight: bash

mammal
======

.. conda:recipe:: mammal
   :replaces_section_title:
   :noindex:

   Accelerated Estimation of Frequency Classes in Site\-heterogeneous Profile Mixture Models

   :homepage: https://www.mathstat.dal.ca/~tsusko/doc/mammal.pdf
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`mammal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mammal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mammal/meta.yaml>`_

   


.. conda:package:: mammal

   |downloads_mammal| |docker_mammal|

   :versions:
      
      

      ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=12.2.0``
   :depends libiconv: 
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: 
   :depends readline: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mammal

   and update with::

      conda update mammal

   or use the docker container::

      docker pull quay.io/biocontainers/mammal:<tag>

   (see `mammal/tags`_ for valid values for ``<tag>``)


.. |downloads_mammal| image:: https://img.shields.io/conda/dn/bioconda/mammal.svg?style=flat
   :target: https://anaconda.org/bioconda/mammal
   :alt:   (downloads)
.. |docker_mammal| image:: https://quay.io/repository/biocontainers/mammal/status
   :target: https://quay.io/repository/biocontainers/mammal
.. _`mammal/tags`: https://quay.io/repository/biocontainers/mammal?tab=tags


.. raw:: html

    <script>
        var package = "mammal";
        var versions = ["1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mammal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mammal/README.html