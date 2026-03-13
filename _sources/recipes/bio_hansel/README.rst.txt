:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bio_hansel'
.. highlight: bash

bio_hansel
==========

.. conda:recipe:: bio_hansel
   :replaces_section_title:
   :noindex:

   Subtype Salmonella enterica genomes using 33bp k\-mer typing schemes.

   :homepage: https://github.com/phac-nml/biohansel
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`bio_hansel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio_hansel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio_hansel/meta.yaml>`_

   \'Subtype Salmonella enterica genomes using 33bp k\-mer typing schemes. \'
   \'Includes schemes for Heidelberg and Enteritidis subtyping.\'



.. conda:package:: bio_hansel

   |downloads_bio_hansel| |docker_bio_hansel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.1-0</code>,  <code>2.5.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.6.1-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.3-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``0.2.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on attrs: 
   :depends on numpy: ``>=1.12.1``
   :depends on pandas: ``>=0.20.1``
   :depends on pyahocorasick: ``>=1.1.6``
   :depends on python: ``>=3``
   :depends on rich: 

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

    pixi global install bio_hansel

to add into an existing workspace instead, run::

    pixi add bio_hansel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bio_hansel

Alternatively, to install into a new environment, run::

    conda create -n envname bio_hansel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bio_hansel:<tag>

(see `bio_hansel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bio_hansel| image:: https://img.shields.io/conda/dn/bioconda/bio_hansel.svg?style=flat
   :target: https://anaconda.org/bioconda/bio_hansel
   :alt:   (downloads)
.. |docker_bio_hansel| image:: https://quay.io/repository/biocontainers/bio_hansel/status
   :target: https://quay.io/repository/biocontainers/bio_hansel
.. _`bio_hansel/tags`: https://quay.io/repository/biocontainers/bio_hansel?tab=tags


.. raw:: html

    <script>
        var package = "bio_hansel";
        var versions = ["2.6.1","2.5.0","2.4.0","2.2.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bio_hansel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bio_hansel/README.html