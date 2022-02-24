:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kakscalculator2'
.. highlight: bash

kakscalculator2
===============

.. conda:recipe:: kakscalculator2
   :replaces_section_title:
   :noindex:

   KaKs\_Calculator2.0 calculates Ka and Ks.

   :homepage: https://github.com/kullrich/kakscalculator2
   :license: GPL3
   :recipe: /`kakscalculator2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kakscalculator2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kakscalculator2/meta.yaml>`_
   :links: doi: :doi:`10.1016/S1672-0229(10)60008-3`

   KaKs\_Calculator2.0 includes several methods for calculating Ka and Ks. This software is a toolkit of incorporating gamma series methods and sliding window strategies.


.. conda:package:: kakscalculator2

   |downloads_kakscalculator2| |docker_kakscalculator2|

   :versions:
      
      

      ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kakscalculator2

   and update with::

      conda update kakscalculator2

   or use the docker container::

      docker pull quay.io/biocontainers/kakscalculator2:<tag>

   (see `kakscalculator2/tags`_ for valid values for ``<tag>``)


.. |downloads_kakscalculator2| image:: https://img.shields.io/conda/dn/bioconda/kakscalculator2.svg?style=flat
   :target: https://anaconda.org/bioconda/kakscalculator2
   :alt:   (downloads)
.. |docker_kakscalculator2| image:: https://quay.io/repository/biocontainers/kakscalculator2/status
   :target: https://quay.io/repository/biocontainers/kakscalculator2
.. _`kakscalculator2/tags`: https://quay.io/repository/biocontainers/kakscalculator2?tab=tags


.. raw:: html

    <script>
        var package = "kakscalculator2";
        var versions = ["2.0.1","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kakscalculator2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kakscalculator2/README.html