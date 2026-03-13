:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fast5'
.. highlight: bash

fast5
=====

.. conda:recipe:: fast5
   :replaces_section_title:
   :noindex:

   A C\+\+ header\-only library for reading Oxford Nanopore Fast5 files.

   :homepage: https://github.com/mateidavid/fast5
   :license: MIT
   :recipe: /`fast5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5/meta.yaml>`_

   


.. conda:package:: fast5

   |downloads_fast5| |docker_fast5|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.5-3</code>,  <code>0.6.5-2</code>,  <code>0.6.5-1</code>,  <code>0.6.5-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3.p1-0</code>,  <code>0.6.2-0</code>,  <code>0.6.2.p1-3</code>,  <code>0.6.2.p1-2</code>,  </span></summary>
      

      ``0.6.5-3``,  ``0.6.5-2``,  ``0.6.5-1``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3.p1-0``,  ``0.6.2-0``,  ``0.6.2.p1-3``,  ``0.6.2.p1-2``,  ``0.6.2.p1-1``,  ``0.6.2.p1-0``,  ``0.6.1-0``,  ``0.5.10a-0``,  ``0.5.9-0``,  ``0.5.8-0``,  ``0.5.6-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on hdf5: 

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

    pixi global install fast5

to add into an existing workspace instead, run::

    pixi add fast5

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fast5

Alternatively, to install into a new environment, run::

    conda create -n envname fast5

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fast5:<tag>

(see `fast5/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fast5| image:: https://img.shields.io/conda/dn/bioconda/fast5.svg?style=flat
   :target: https://anaconda.org/bioconda/fast5
   :alt:   (downloads)
.. |docker_fast5| image:: https://quay.io/repository/biocontainers/fast5/status
   :target: https://quay.io/repository/biocontainers/fast5
.. _`fast5/tags`: https://quay.io/repository/biocontainers/fast5?tab=tags


.. raw:: html

    <script>
        var package = "fast5";
        var versions = ["0.6.5","0.6.5","0.6.5","0.6.5","0.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fast5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fast5/README.html