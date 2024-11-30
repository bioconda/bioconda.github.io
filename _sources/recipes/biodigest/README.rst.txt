:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biodigest'
.. highlight: bash

biodigest
=========

.. conda:recipe:: biodigest
   :replaces_section_title:
   :noindex:

   In silico Validation of Disease and Gene sets\, Clusterings or Subnetworks \(DIGEST\)

   :homepage: http://pypi.python.org/pypi/biodigest/
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`biodigest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biodigest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biodigest/meta.yaml>`_

   


.. conda:package:: biodigest

   |downloads_biodigest| |docker_biodigest|

   :versions:
      
      

      ``0.2.16-2``,  ``0.2.16-1``,  ``0.2.16-0``

      

   
   :depends biothings_client: ``0.2.6``
   :depends graph-tool: ``>=2.58``
   :depends gseapy: ``0.10.5``
   :depends numpy: ``1.24.3``
   :depends pandas: ``1.5.2``
   :depends psutil: ``5.9.0``
   :depends pycairo: ``>=1.21.0``
   :depends python: ``>=3.7``
   :depends requests: ``>=2.28.2``
   :depends scipy: ``1.8.0``
   :depends seaborn: ``>=0.12.2``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install biodigest

   and update with::

      mamba update biodigest

  To create a new environment, run::

      mamba create --name myenvname biodigest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biodigest:<tag>

   (see `biodigest/tags`_ for valid values for ``<tag>``)


.. |downloads_biodigest| image:: https://img.shields.io/conda/dn/bioconda/biodigest.svg?style=flat
   :target: https://anaconda.org/bioconda/biodigest
   :alt:   (downloads)
.. |docker_biodigest| image:: https://quay.io/repository/biocontainers/biodigest/status
   :target: https://quay.io/repository/biocontainers/biodigest
.. _`biodigest/tags`: https://quay.io/repository/biocontainers/biodigest?tab=tags


.. raw:: html

    <script>
        var package = "biodigest";
        var versions = ["0.2.16","0.2.16","0.2.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biodigest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biodigest/README.html