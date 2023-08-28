:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irida-sistr-results'
.. highlight: bash

irida-sistr-results
===================

.. conda:recipe:: irida-sistr-results
   :replaces_section_title:
   :noindex:

   Exports SISTR results available through IRIDA into a single report.

   :homepage: https://github.com/phac-nml/irida-sistr-results
   :license: APACHE / Apache Software License
   :recipe: /`irida-sistr-results <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-sistr-results>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-sistr-results/meta.yaml>`_

   The IRIDA SISTR Results application enables the export of SISTR
   results that were run through IRIDA \(via the sistr\-cmd application\)
   to a spreadsheet


.. conda:package:: irida-sistr-results

   |downloads_irida-sistr-results| |docker_irida-sistr-results|

   :versions:
      
      

      ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-2``,  ``0.4.0-0``,  ``0.3.1-0``

      

   
   :depends appdirs: ``>=1.4.3``
   :depends pandas: ``>=0.23.0``
   :depends python: ``>=3``
   :depends rauth: ``>=0.7.3``
   :depends urllib3: ``>=1.21.1``
   :depends xlsxwriter: ``>=0.9.8``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install irida-sistr-results

   and update with::

      mamba update irida-sistr-results

  To create a new environment, run::

      mamba create --name myenvname irida-sistr-results

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/irida-sistr-results:<tag>

   (see `irida-sistr-results/tags`_ for valid values for ``<tag>``)


.. |downloads_irida-sistr-results| image:: https://img.shields.io/conda/dn/bioconda/irida-sistr-results.svg?style=flat
   :target: https://anaconda.org/bioconda/irida-sistr-results
   :alt:   (downloads)
.. |docker_irida-sistr-results| image:: https://quay.io/repository/biocontainers/irida-sistr-results/status
   :target: https://quay.io/repository/biocontainers/irida-sistr-results
.. _`irida-sistr-results/tags`: https://quay.io/repository/biocontainers/irida-sistr-results?tab=tags


.. raw:: html

    <script>
        var package = "irida-sistr-results";
        var versions = ["0.6.0","0.6.0","0.5.0","0.4.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irida-sistr-results/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irida-sistr-results/README.html