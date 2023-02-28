:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fuma'
.. highlight: bash

fuma
====

.. conda:recipe:: fuma
   :replaces_section_title:
   :noindex:

   FuMa\: reporting overlap in RNA\-seq detected fusion genes

   :homepage: https://github.com/yhoogstrate/fuma/
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`fuma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fuma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fuma/meta.yaml>`_

   


.. conda:package:: fuma

   |downloads_fuma| |docker_fuma|

   :versions:
      
      

      ``4.0.0-0``,  ``3.0.6-0``,  ``3.0.5-2``,  ``3.0.5-1``,  ``3.0.5-0``,  ``3.0.3-0``

      

   
   :depends htseq: ``>=0.6.1``
   :depends numpy: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fuma

   and update with::

      conda update fuma

   or use the docker container::

      docker pull quay.io/biocontainers/fuma:<tag>

   (see `fuma/tags`_ for valid values for ``<tag>``)


.. |downloads_fuma| image:: https://img.shields.io/conda/dn/bioconda/fuma.svg?style=flat
   :target: https://anaconda.org/bioconda/fuma
   :alt:   (downloads)
.. |docker_fuma| image:: https://quay.io/repository/biocontainers/fuma/status
   :target: https://quay.io/repository/biocontainers/fuma
.. _`fuma/tags`: https://quay.io/repository/biocontainers/fuma?tab=tags


.. raw:: html

    <script>
        var package = "fuma";
        var versions = ["4.0.0","3.0.6","3.0.5","3.0.5","3.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fuma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fuma/README.html