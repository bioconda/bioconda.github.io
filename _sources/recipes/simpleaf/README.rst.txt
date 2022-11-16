:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simpleaf'
.. highlight: bash

simpleaf
========

.. conda:recipe:: simpleaf
   :replaces_section_title:
   :noindex:

   A rust framework to make using alevin\-fry even simpler.

   :homepage: https://github.com/COMBINE-lab/simpleaf
   :license: BSD 3-Clause
   :recipe: /`simpleaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simpleaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simpleaf/meta.yaml>`_

   


.. conda:package:: simpleaf

   |downloads_simpleaf| |docker_simpleaf|

   :versions:
      
      

      ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``

      

   
   :depends alevin-fry: ``>=0.8.0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends pyroe: ``>=0.6.4``
   :depends salmon: ``>=1.9.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install simpleaf

   and update with::

      conda update simpleaf

   or use the docker container::

      docker pull quay.io/biocontainers/simpleaf:<tag>

   (see `simpleaf/tags`_ for valid values for ``<tag>``)


.. |downloads_simpleaf| image:: https://img.shields.io/conda/dn/bioconda/simpleaf.svg?style=flat
   :target: https://anaconda.org/bioconda/simpleaf
   :alt:   (downloads)
.. |docker_simpleaf| image:: https://quay.io/repository/biocontainers/simpleaf/status
   :target: https://quay.io/repository/biocontainers/simpleaf
.. _`simpleaf/tags`: https://quay.io/repository/biocontainers/simpleaf?tab=tags


.. raw:: html

    <script>
        var package = "simpleaf";
        var versions = ["0.7.0","0.6.0","0.5.3","0.5.2","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simpleaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simpleaf/README.html