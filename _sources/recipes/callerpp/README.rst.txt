:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'callerpp'
.. highlight: bash

callerpp
========

.. conda:recipe:: callerpp
   :replaces_section_title:
   :noindex:

   A simple consensus caller based on partial order alignment with spoa

   :homepage: https://github.com/nh13/callerpp
   :license: MIT
   :recipe: /`callerpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/callerpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/callerpp/meta.yaml>`_

   


.. conda:package:: callerpp

   |downloads_callerpp| |docker_callerpp|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-1``,  ``0.1.5-0``,  ``0.1.4-1``,  ``0.1.4-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends spoa: ``>=4.1.4``
   :depends spoa: ``>=4.1.4,<5.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install callerpp

   and update with::

      mamba update callerpp

  To create a new environment, run::

      mamba create --name myenvname callerpp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/callerpp:<tag>

   (see `callerpp/tags`_ for valid values for ``<tag>``)


.. |downloads_callerpp| image:: https://img.shields.io/conda/dn/bioconda/callerpp.svg?style=flat
   :target: https://anaconda.org/bioconda/callerpp
   :alt:   (downloads)
.. |docker_callerpp| image:: https://quay.io/repository/biocontainers/callerpp/status
   :target: https://quay.io/repository/biocontainers/callerpp
.. _`callerpp/tags`: https://quay.io/repository/biocontainers/callerpp?tab=tags


.. raw:: html

    <script>
        var package = "callerpp";
        var versions = ["0.1.6","0.1.5","0.1.5","0.1.4","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/callerpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/callerpp/README.html