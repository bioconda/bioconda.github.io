:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mameshiba'
.. highlight: bash

mameshiba
=========

.. conda:recipe:: mameshiba
   :replaces_section_title:
   :noindex:

   mameshiba installs only the dependencies needed to run MameShiba.

   :homepage: https://github.com/Sika-Zheng-Lab/Shiba
   :documentation: https://sika-zheng-lab.github.io/Shiba
   
   :license: MIT / MIT
   :recipe: /`mameshiba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mameshiba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mameshiba/meta.yaml>`_

   mameshiba is a minimal conda meta\-package that installs all dependencies required
   for running MameShiba \(https\:\/\/github.com\/Sika\-Zheng\-Lab\/Shiba\).



.. conda:package:: mameshiba

   |downloads_mameshiba| |docker_mameshiba|

   :versions:
      
      

      ``0.7.0-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``

      

   
   :depends numexpr: ``2.8.4``
   :depends numpy: ``1.26.4``
   :depends pandas: ``1.5.3``
   :depends pysam: ``0.23.0``
   :depends python: ``3.11.0.*``
   :depends pyyaml: ``6.0.2``
   :depends regtools: ``1.0.0``
   :depends scanpy: ``1.9.5``
   :depends statsmodels: ``0.13.5``
   :depends stringtie: ``3.0.0``
   :depends subread: ``2.0.8``
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

      mamba install mameshiba

   and update with::

      mamba update mameshiba

  To create a new environment, run::

      mamba create --name myenvname mameshiba

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mameshiba:<tag>

   (see `mameshiba/tags`_ for valid values for ``<tag>``)


.. |downloads_mameshiba| image:: https://img.shields.io/conda/dn/bioconda/mameshiba.svg?style=flat
   :target: https://anaconda.org/bioconda/mameshiba
   :alt:   (downloads)
.. |docker_mameshiba| image:: https://quay.io/repository/biocontainers/mameshiba/status
   :target: https://quay.io/repository/biocontainers/mameshiba
.. _`mameshiba/tags`: https://quay.io/repository/biocontainers/mameshiba?tab=tags


.. raw:: html

    <script>
        var package = "mameshiba";
        var versions = ["0.7.0","0.6.3","0.6.2","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mameshiba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mameshiba/README.html