.. title:: Package Recipe 'irida-sistr-results'
.. highlight: bash


irida-sistr-results
===================

.. conda:recipe:: irida-sistr-results
   :replaces_section_title:

   Exports SISTR results available through IRIDA into a single report.

   :homepage: https://github.com/phac-nml/irida-sistr-results
   :license: APACHE / Apache Software License
   :recipe: /`irida-sistr-results <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-sistr-results>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-sistr-results/meta.yaml>`_

   The IRIDA SISTR Results application enables the export of SISTR
   results that were run through IRIDA \(via the sistr\-cmd application\)
   to a spreadsheet


.. conda:package:: irida-sistr-results

   |downloads_irida-sistr-results| |docker_irida-sistr-results|

   :versions: 0.6.0, 0.5.0, 0.4.0, 0.3.1

   :depends: :conda:package:`appdirs` >=1.4.3 :conda:package:`pandas` >=0.23.0 :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`rauth` >=0.7.3 :conda:package:`urllib3` >=1.21.1 :conda:package:`xlsxwriter` >=0.9.8 

   :required~by: |required_by_irida-sistr-results|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install irida-sistr-results

   and update with::

      conda update irida-sistr-results

   or use the docker container::

      docker pull quay.io/repository/biocontainers/irida-sistr-results


.. |required_by_irida-sistr-results| conda:required_by:: irida-sistr-results
.. |downloads_irida-sistr-results| image:: https://img.shields.io/conda/dn/bioconda/irida-sistr-results.svg?style=flat
   :alt:   (downloads)
.. |docker_irida-sistr-results| image:: https://quay.io/repository/biocontainers/irida-sistr-results/status
   :target: https://quay.io/repository/biocontainers/irida-sistr-results







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irida-sistr-results/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irida-sistr-results/README.html

