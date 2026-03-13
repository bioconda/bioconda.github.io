:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fgbio-minimal'
.. highlight: bash

fgbio-minimal
=============

.. conda:recipe:: fgbio-minimal
   :replaces_section_title:
   :noindex:

   A set of tools for working with genomic and high throughput sequencing data\, including UMIs

   :homepage: https://github.com/fulcrumgenomics/fgbio
   :license: MIT / MIT
   :recipe: /`fgbio-minimal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgbio-minimal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgbio-minimal/meta.yaml>`_

   A set of tools for working with genomic and high throughput sequencing data\, including UMIs. The \'fgbio\-minimal\' package offers an installation of fgbio without the \'r\-base\' dependency.


.. conda:package:: fgbio-minimal

   |downloads_fgbio-minimal| |docker_fgbio-minimal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.2-0</code>,  <code>3.1.1-0</code>,  <code>3.1.0-0</code>,  <code>3.0.0-0</code>,  <code>2.5.21-0</code>,  <code>2.5.1-0</code>,  <code>2.5.0-0</code>,  <code>2.4.0-0</code>,  <code>2.3.0-0</code>,  </span></summary>
      

      ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.5.21-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.5.1-0``,  ``1.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=8``
   :depends on python: 

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

    pixi global install fgbio-minimal

to add into an existing workspace instead, run::

    pixi add fgbio-minimal

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fgbio-minimal

Alternatively, to install into a new environment, run::

    conda create -n envname fgbio-minimal

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fgbio-minimal:<tag>

(see `fgbio-minimal/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fgbio-minimal| image:: https://img.shields.io/conda/dn/bioconda/fgbio-minimal.svg?style=flat
   :target: https://anaconda.org/bioconda/fgbio-minimal
   :alt:   (downloads)
.. |docker_fgbio-minimal| image:: https://quay.io/repository/biocontainers/fgbio-minimal/status
   :target: https://quay.io/repository/biocontainers/fgbio-minimal
.. _`fgbio-minimal/tags`: https://quay.io/repository/biocontainers/fgbio-minimal?tab=tags


.. raw:: html

    <script>
        var package = "fgbio-minimal";
        var versions = ["3.1.2","3.1.1","3.1.0","3.0.0","2.5.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgbio-minimal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgbio-minimal/README.html