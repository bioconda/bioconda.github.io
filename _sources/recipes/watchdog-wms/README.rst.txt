:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'watchdog-wms'
.. highlight: bash

watchdog-wms
============

.. conda:recipe:: watchdog-wms
   :replaces_section_title:
   :noindex:

   Watchdog\, a WMS for the automated and distributed analysis of large\-scale experimental data. The software is implemented in Java and is thus platform\-independent. Main feature include \+ straightforward processing of replicate data \+ support for distributed computer systems \+ remote storage support \+ customizable error detection \+ manual intervention into workflow execution \+ GUI for workflow construction using pre\-defined modules \+ a helper script for creating new module definitions \+ no restriction to specific programming languages \+ provides a flexible plugin system for extending without modifying the original sources

   :homepage: https://www.bio.ifi.lmu.de/watchdog
   :license: GNU General Public License, Version 3
   :recipe: /`watchdog-wms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/watchdog-wms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/watchdog-wms/meta.yaml>`_

   


.. conda:package:: watchdog-wms

   |downloads_watchdog-wms| |docker_watchdog-wms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.8-0</code>,  <code>2.0.7-1</code>,  <code>2.0.7-0</code>,  <code>2.0.6-1</code>,  <code>2.0.6-0</code>,  <code>2.0.5-0</code>,  <code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  </span></summary>
      

      ``2.0.8-0``,  ``2.0.7-1``,  ``2.0.7-0``,  ``2.0.6-1``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.2.7-1``,  ``1.2.6-1``,  ``1.2.6-0``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.4b-0``,  ``1.2.3b-0``

      
      .. raw:: html

         </details>
      

   
   :depends coreutils: ``>=8``
   :depends javafx-sdk: ``>=11``
   :depends openjdk: ``>=11``
   :depends wget: 
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

      mamba install watchdog-wms

   and update with::

      mamba update watchdog-wms

  To create a new environment, run::

      mamba create --name myenvname watchdog-wms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/watchdog-wms:<tag>

   (see `watchdog-wms/tags`_ for valid values for ``<tag>``)


.. |downloads_watchdog-wms| image:: https://img.shields.io/conda/dn/bioconda/watchdog-wms.svg?style=flat
   :target: https://anaconda.org/bioconda/watchdog-wms
   :alt:   (downloads)
.. |docker_watchdog-wms| image:: https://quay.io/repository/biocontainers/watchdog-wms/status
   :target: https://quay.io/repository/biocontainers/watchdog-wms
.. _`watchdog-wms/tags`: https://quay.io/repository/biocontainers/watchdog-wms?tab=tags


.. raw:: html

    <script>
        var package = "watchdog-wms";
        var versions = ["2.0.8","2.0.7","2.0.7","2.0.6","2.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/watchdog-wms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/watchdog-wms/README.html