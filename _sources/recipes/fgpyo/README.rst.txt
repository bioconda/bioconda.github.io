:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fgpyo'
.. highlight: bash

fgpyo
=====

.. conda:recipe:: fgpyo
   :replaces_section_title:
   :noindex:

   Python bioinformatics and genomics library

   :homepage: https://pypi.org/project/fgpyo/
   :license: MIT
   :recipe: /`fgpyo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgpyo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgpyo/meta.yaml>`_

   


.. conda:package:: fgpyo

   |downloads_fgpyo| |docker_fgpyo|

   :versions:
      
      

      ``0.0.6-0``,  ``0.0.5-0``

      

   
   :depends attrs: ``>=19.3.0``
   :depends pysam: ``>=0.20.0``
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fgpyo

   and update with::

      conda update fgpyo

   or use the docker container::

      docker pull quay.io/biocontainers/fgpyo:<tag>

   (see `fgpyo/tags`_ for valid values for ``<tag>``)


.. |downloads_fgpyo| image:: https://img.shields.io/conda/dn/bioconda/fgpyo.svg?style=flat
   :target: https://anaconda.org/bioconda/fgpyo
   :alt:   (downloads)
.. |docker_fgpyo| image:: https://quay.io/repository/biocontainers/fgpyo/status
   :target: https://quay.io/repository/biocontainers/fgpyo
.. _`fgpyo/tags`: https://quay.io/repository/biocontainers/fgpyo?tab=tags


.. raw:: html

    <script>
        var package = "fgpyo";
        var versions = ["0.0.6","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgpyo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgpyo/README.html