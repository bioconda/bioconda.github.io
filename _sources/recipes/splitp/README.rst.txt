:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'splitp'
.. highlight: bash

splitp
======

.. conda:recipe:: splitp
   :replaces_section_title:
   :noindex:

   splitp is a streaming read pre\-preprocessor.

   :homepage: https://github.com/COMBINE-lab/splitp
   :license: BSD / BSD-3-Clause
   :recipe: /`splitp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splitp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splitp/meta.yaml>`_

   


.. conda:package:: splitp

   |downloads_splitp| |docker_splitp|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install splitp

   and update with::

      conda update splitp

   or use the docker container::

      docker pull quay.io/biocontainers/splitp:<tag>

   (see `splitp/tags`_ for valid values for ``<tag>``)


.. |downloads_splitp| image:: https://img.shields.io/conda/dn/bioconda/splitp.svg?style=flat
   :target: https://anaconda.org/bioconda/splitp
   :alt:   (downloads)
.. |docker_splitp| image:: https://quay.io/repository/biocontainers/splitp/status
   :target: https://quay.io/repository/biocontainers/splitp
.. _`splitp/tags`: https://quay.io/repository/biocontainers/splitp?tab=tags


.. raw:: html

    <script>
        var package = "splitp";
        var versions = ["0.2.0","0.1.0","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/splitp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/splitp/README.html