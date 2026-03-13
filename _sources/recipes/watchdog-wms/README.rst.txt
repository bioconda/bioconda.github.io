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
      

   
   :depends on coreutils: ``>=8``
   :depends on javafx-sdk: ``>=11``
   :depends on openjdk: ``>=11``
   :depends on wget: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install watchdog-wms

to add into an existing workspace instead, run::

    pixi add watchdog-wms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install watchdog-wms

Alternatively, to install into a new environment, run::

    conda create -n envname watchdog-wms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/watchdog-wms:<tag>

(see `watchdog-wms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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