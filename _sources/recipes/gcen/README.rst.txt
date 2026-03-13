:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gcen'
.. highlight: bash

gcen
====

.. conda:recipe:: gcen
   :replaces_section_title:
   :noindex:

   GCEN\: an easy\-to\-use toolkit for Gene Co\-Expression Network analysis and lncRNAs annotation.

   :homepage: https://www.biochen.org/gcen
   :developer docs: https://github.com/wen-chen/gcen
   :license: GPL-3.0-or-later
   :recipe: /`gcen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcen/meta.yaml>`_
   :links: biotools: :biotools:`gcen`, doi: :doi:`10.3390/cimb44040100`

   GCEN is a command\-line toolkit that allows biologists to easily build gene co\-expression network and predict gene function\, especially in RNA\-Seq research or lncRNAs annotation. GCEN is primarily designed to be used in lncRNAs annotation\, but is not limited to those scenarios. It is an efficient and easy\-to\-use solution that will allow everyone to perform gene co\-expression network analysis without sophisticated programming skills. The recommended pipeline consists of four parts\: data pretreatment\, network construction\, module identification\, and function annotation. A README file and sample data are included in the software package. Because of its modular design\, the GCEN can be easily integrated into another pipeline. Also\, the multithreaded implementation of GCEN makes it fast and efficient for RNA\-Seq data.


.. conda:package:: gcen

   |downloads_gcen| |docker_gcen|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.3-3</code>,  <code>0.6.3-2</code>,  <code>0.6.3-1</code>,  <code>0.6.3-0</code>,  <code>0.6.2-1</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.2-0</code>,  </span></summary>
      

      ``0.6.3-3``,  ``0.6.3-2``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install gcen

to add into an existing workspace instead, run::

    pixi add gcen

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gcen

Alternatively, to install into a new environment, run::

    conda create -n envname gcen

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gcen:<tag>

(see `gcen/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gcen| image:: https://img.shields.io/conda/dn/bioconda/gcen.svg?style=flat
   :target: https://anaconda.org/bioconda/gcen
   :alt:   (downloads)
.. |docker_gcen| image:: https://quay.io/repository/biocontainers/gcen/status
   :target: https://quay.io/repository/biocontainers/gcen
.. _`gcen/tags`: https://quay.io/repository/biocontainers/gcen?tab=tags


.. raw:: html

    <script>
        var package = "gcen";
        var versions = ["0.6.3","0.6.3","0.6.3","0.6.3","0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gcen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gcen/README.html