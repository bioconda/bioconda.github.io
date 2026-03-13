:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'opsin'
.. highlight: bash

opsin
=====

.. conda:recipe:: opsin/2.1.0
   :replaces_section_title:
   :noindex:

   OPSIN is a Java\(1.6\+\) library for IUPAC name\-to\-structure conversion offering high recall and precision on organic chemical nomenclature.

   :homepage: https://bitbucket.org/dan2097/opsin/
   :license: Artistic License 2.0
   :recipe: /`opsin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opsin>`_/`2.1.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opsin/2.1.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opsin/2.1.0/meta.yaml>`_

   


.. conda:package:: opsin

   |downloads_opsin| |docker_opsin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.0-3</code>,  <code>2.4.0-2</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.1.0-3</code>,  <code>2.1.0-2</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>1.4.0-3</code>,  </span></summary>
      

      ``2.4.0-3``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.1.0-3``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``1.4.0-3``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=6``

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

    pixi global install opsin

to add into an existing workspace instead, run::

    pixi add opsin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install opsin

Alternatively, to install into a new environment, run::

    conda create -n envname opsin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/opsin:<tag>

(see `opsin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_opsin| image:: https://img.shields.io/conda/dn/bioconda/opsin.svg?style=flat
   :target: https://anaconda.org/bioconda/opsin
   :alt:   (downloads)
.. |docker_opsin| image:: https://quay.io/repository/biocontainers/opsin/status
   :target: https://quay.io/repository/biocontainers/opsin
.. _`opsin/tags`: https://quay.io/repository/biocontainers/opsin?tab=tags


.. raw:: html

    <script>
        var package = "opsin";
        var versions = ["2.4.0","2.4.0","2.4.0","2.4.0","2.1.0"];
    </script>





Notes
-----
Opsin is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run opsin with \"opsin \-Xms512m \-Xmx1g \-\-help\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/opsin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/opsin/README.html