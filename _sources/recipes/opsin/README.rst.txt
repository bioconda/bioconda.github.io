:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'opsin'
.. highlight: bash

opsin
=====

.. conda:recipe:: opsin/1.4.0
   :replaces_section_title:
   :noindex:

   OPSIN is a Java\(1.6\+\) library for IUPAC name\-to\-structure conversion offering high recall and precision on organic chemical nomenclature.

   :homepage: https://bitbucket.org/dan2097/opsin/
   :license: Artistic License 2.0
   :recipe: /`opsin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opsin>`_/`1.4.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opsin/1.4.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opsin/1.4.0/meta.yaml>`_

   


.. conda:package:: opsin

   |downloads_opsin| |docker_opsin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.0-3</code>,  <code>2.4.0-2</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.1.0-3</code>,  <code>2.1.0-2</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>1.4.0-3</code>,  </span></summary>
      

      ``2.4.0-3``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.1.0-3``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``1.4.0-3``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install opsin

   and update with::

      conda update opsin

   or use the docker container::

      docker pull quay.io/biocontainers/opsin:<tag>

   (see `opsin/tags`_ for valid values for ``<tag>``)


.. |downloads_opsin| image:: https://img.shields.io/conda/dn/bioconda/opsin.svg?style=flat
   :target: https://anaconda.org/bioconda/opsin
   :alt:   (downloads)
.. |docker_opsin| image:: https://quay.io/repository/biocontainers/opsin/status
   :target: https://quay.io/repository/biocontainers/opsin
.. _`opsin/tags`: https://quay.io/repository/biocontainers/opsin?tab=tags






Notes
-----
Opsin is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run opsin with \"opsin \-Xms512m \-Xmx1g \-\-help\"


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/opsin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/opsin/README.html