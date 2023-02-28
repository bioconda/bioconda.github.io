:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'feht'
.. highlight: bash

feht
====

.. conda:recipe:: feht
   :replaces_section_title:
   :noindex:

   A commandline program to automatically identify markers predictive of groups. Can be used with binary data\, genomic \(single nucleotide variant\) data\, or arbitrary character data.

   :homepage: https://github.com/chadlaing/feht/
   :license: BSD / BSD 3-clause
   :recipe: /`feht <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feht>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feht/meta.yaml>`_

   


.. conda:package:: feht

   |downloads_feht| |docker_feht|

   :versions:
      
      

      ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install feht

   and update with::

      conda update feht

   or use the docker container::

      docker pull quay.io/biocontainers/feht:<tag>

   (see `feht/tags`_ for valid values for ``<tag>``)


.. |downloads_feht| image:: https://img.shields.io/conda/dn/bioconda/feht.svg?style=flat
   :target: https://anaconda.org/bioconda/feht
   :alt:   (downloads)
.. |docker_feht| image:: https://quay.io/repository/biocontainers/feht/status
   :target: https://quay.io/repository/biocontainers/feht
.. _`feht/tags`: https://quay.io/repository/biocontainers/feht?tab=tags


.. raw:: html

    <script>
        var package = "feht";
        var versions = ["1.1.0","1.1.0","1.1.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/feht/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/feht/README.html