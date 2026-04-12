:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mreps'
.. highlight: bash

mreps
=====

.. conda:recipe:: mreps
   :replaces_section_title:
   :noindex:

   mreps is a flexible and efficient software for identifying serial repeats \(usually called tandem repeats\) in DNA sequences.

   :homepage: http://mreps.univ-mlv.fr
   :license: GPL / GPL-2.0-or-later
   :recipe: /`mreps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mreps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mreps/meta.yaml>`_
   :links: biotools: :biotools:`mreps`

   


.. conda:package:: mreps

   |downloads_mreps| |docker_mreps|

   :versions:
      
      

      ``2.6.01-6``,  ``2.6.01-5``,  ``2.6.01-4``,  ``2.6.01-3``,  ``2.6.01-2``,  ``2.6.01-1``,  ``2.6.01-0``,  ``0.1-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install mreps

to add into an existing workspace instead, run::

    pixi add mreps

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mreps

Alternatively, to install into a new environment, run::

    conda create -n envname mreps

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mreps:<tag>

(see `mreps/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mreps| image:: https://img.shields.io/conda/dn/bioconda/mreps.svg?style=flat
   :target: https://anaconda.org/bioconda/mreps
   :alt:   (downloads)
.. |docker_mreps| image:: https://quay.io/repository/biocontainers/mreps/status
   :target: https://quay.io/repository/biocontainers/mreps
.. _`mreps/tags`: https://quay.io/repository/biocontainers/mreps?tab=tags


.. raw:: html

    <script>
        var package = "mreps";
        var versions = ["2.6.01","2.6.01","2.6.01","2.6.01","2.6.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mreps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mreps/README.html