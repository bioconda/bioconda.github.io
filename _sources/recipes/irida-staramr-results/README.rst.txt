:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irida-staramr-results'
.. highlight: bash

irida-staramr-results
=====================

.. conda:recipe:: irida-staramr-results
   :replaces_section_title:
   :noindex:

   IRIDA StarAMR Results program enables StarAMR analysis results that were run through IRIDA to be batch downloaded into a collection of spreadsheets using the command line.

   :homepage: https://github.com/phac-nml/irida-staramr-results
   :license: Apache-2.0
   :recipe: /`irida-staramr-results <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-staramr-results>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-staramr-results/meta.yaml>`_

   


.. conda:package:: irida-staramr-results

   |downloads_irida-staramr-results| |docker_irida-staramr-results|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends pandas: 
   :depends python: ``>=3.8.*``
   :depends python-dateutil: 
   :depends pyyaml: 
   :depends rauth: 
   :depends requests: 
   :depends setuptools: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install irida-staramr-results

   and update with::

      conda update irida-staramr-results

   or use the docker container::

      docker pull quay.io/biocontainers/irida-staramr-results:<tag>

   (see `irida-staramr-results/tags`_ for valid values for ``<tag>``)


.. |downloads_irida-staramr-results| image:: https://img.shields.io/conda/dn/bioconda/irida-staramr-results.svg?style=flat
   :target: https://anaconda.org/bioconda/irida-staramr-results
   :alt:   (downloads)
.. |docker_irida-staramr-results| image:: https://quay.io/repository/biocontainers/irida-staramr-results/status
   :target: https://quay.io/repository/biocontainers/irida-staramr-results
.. _`irida-staramr-results/tags`: https://quay.io/repository/biocontainers/irida-staramr-results?tab=tags


.. raw:: html

    <script>
        var package = "irida-staramr-results";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irida-staramr-results/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irida-staramr-results/README.html