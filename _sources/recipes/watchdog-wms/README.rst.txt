.. _`watchdog-wms`:

watchdog-wms
============

|downloads|

Watchdog\, a WMS for the automated and distributed analysis of large\-scale experimental data. The software is implemented in Java and is thus platform\-independent. Main feature include straightforward processing of replicate data support for distributed computer systems remote storage support customizable error detection manual intervention into workflow execution GUI for workflow construction using pre\-defined modules a helper script for creating new module definitions no restriction to specific programming languages provides a flexible plugin system for extending without modifying the original sources

============= ===========
Home          https://www.bio.ifi.lmu.de/watchdog
Versions      1.2.3b, 1.2.4b, 1.2.5, 1.2.6
License       GNU General Public License, Version 3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/watchdog-wms



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install watchdog-wms

and update with::

   conda update watchdog-wms


Notes
-----
Graphical user interface works only with JavaFX\, which is currently not part of OpenJDK8.
Install script automatically detects if JavaFX is installed.



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/watchdog-wms.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/watchdog-wms/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/watchdog-wms/README.html
.. |downloads| image:: https://anaconda.org/bioconda/watchdog-wms/badges/downloads.svg
               :target: https://anaconda.org/bioconda/watchdog-wms
.. |docker| image:: https://quay.io/repository/biocontainers/watchdog-wms/status
                :target: https://quay.io/repository/biocontainers/watchdog-wms

