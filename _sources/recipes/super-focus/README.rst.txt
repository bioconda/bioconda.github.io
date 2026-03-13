:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'super-focus'
.. highlight: bash

super-focus
===========

.. conda:recipe:: super-focus
   :replaces_section_title:
   :noindex:

   SUPER\-FOCUS\: A tool for agile functional analysis of shotgun metagenomic data

   :homepage: https://edwards.sdsu.edu/SUPERFOCUS
   :developer docs: https://github.com/metageni/SUPER-FOCUS
   :license: GPL / GPL-3.0
   :recipe: /`super-focus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/super-focus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/super-focus/meta.yaml>`_

   


.. conda:package:: super-focus

   |downloads_super-focus| |docker_super-focus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6-1</code>,  <code>1.6-0</code>,  <code>1.5-0</code>,  <code>1.4.1-0</code>,  <code>1.4-0</code>,  <code>1.0-0</code>,  <code>0.35-0</code>,  <code>0.34-1</code>,  <code>0.34-0</code>,  </span></summary>
      

      ``1.6-1``,  ``1.6-0``,  ``1.5-0``,  ``1.4.1-0``,  ``1.4-0``,  ``1.0-0``,  ``0.35-0``,  ``0.34-1``,  ``0.34-0``,  ``0.33-0``,  ``0.32-1``,  ``0.32-0``,  ``0.31-0``,  ``0.30-0``,  ``0.29-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: 
   :depends on diamond: 
   :depends on kmer-jellyfish: 
   :depends on mmseqs2: 
   :depends on numpy: ``>=1.12.1``
   :depends on python: ``>=3``
   :depends on rapsearch: 
   :depends on scipy: 
   :depends on setuptools: 
   :depends on setuptools_scm: 

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

    pixi global install super-focus

to add into an existing workspace instead, run::

    pixi add super-focus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install super-focus

Alternatively, to install into a new environment, run::

    conda create -n envname super-focus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/super-focus:<tag>

(see `super-focus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_super-focus| image:: https://img.shields.io/conda/dn/bioconda/super-focus.svg?style=flat
   :target: https://anaconda.org/bioconda/super-focus
   :alt:   (downloads)
.. |docker_super-focus| image:: https://quay.io/repository/biocontainers/super-focus/status
   :target: https://quay.io/repository/biocontainers/super-focus
.. _`super-focus/tags`: https://quay.io/repository/biocontainers/super-focus?tab=tags


.. raw:: html

    <script>
        var package = "super-focus";
        var versions = ["1.6","1.6","1.5","1.4.1","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/super-focus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/super-focus/README.html