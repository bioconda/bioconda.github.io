:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flaimapper'
.. highlight: bash

flaimapper
==========

.. conda:recipe:: flaimapper
   :replaces_section_title:
   :noindex:

   FlaiMapper\: Detecting small ncRNA derived fragments in small RNA\-Seq data

   :homepage: https://github.com/yhoogstrate/flaimapper/
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`flaimapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flaimapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flaimapper/meta.yaml>`_

   


.. conda:package:: flaimapper

   |downloads_flaimapper| |docker_flaimapper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.0-2</code>,  <code>3.0.0-1</code>,  <code>3.0.0-0</code>,  <code>2.5.0-1</code>,  <code>2.5.0-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.3.4-0</code>,  <code>2.3.3-0</code>,  </span></summary>
      

      ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on pysam: ``>=0.14.1``
   :depends on python: ``>=3``

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

    pixi global install flaimapper

to add into an existing workspace instead, run::

    pixi add flaimapper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install flaimapper

Alternatively, to install into a new environment, run::

    conda create -n envname flaimapper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/flaimapper:<tag>

(see `flaimapper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_flaimapper| image:: https://img.shields.io/conda/dn/bioconda/flaimapper.svg?style=flat
   :target: https://anaconda.org/bioconda/flaimapper
   :alt:   (downloads)
.. |docker_flaimapper| image:: https://quay.io/repository/biocontainers/flaimapper/status
   :target: https://quay.io/repository/biocontainers/flaimapper
.. _`flaimapper/tags`: https://quay.io/repository/biocontainers/flaimapper?tab=tags


.. raw:: html

    <script>
        var package = "flaimapper";
        var versions = ["3.0.0","3.0.0","3.0.0","2.5.0","2.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flaimapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flaimapper/README.html