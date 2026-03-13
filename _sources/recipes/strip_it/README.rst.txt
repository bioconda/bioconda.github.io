:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strip_it'
.. highlight: bash

strip_it
========

.. conda:recipe:: strip_it/1.0.2
   :replaces_section_title:
   :noindex:

   Strip\-it is a program that extracts predefined scaffolds from organic small molecules.

   :homepage: http://silicos-it.be.s3-website-eu-west-1.amazonaws.com/software/strip-it/1.0.2/strip-it.html
   :license: LGPL
   :recipe: /`strip_it <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strip_it>`_/`1.0.2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strip_it/1.0.2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strip_it/1.0.2/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`ctb_stripit`

   


.. conda:package:: strip_it

   |downloads_strip_it| |docker_strip_it|

   :versions:
      
      

      ``1.0.2-6``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends on libgcc-ng: ``>=9.3.0``
   :depends on libstdcxx-ng: ``>=9.3.0``
   :depends on openbabel: ``2.4.1.*``

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

    pixi global install strip_it

to add into an existing workspace instead, run::

    pixi add strip_it

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install strip_it

Alternatively, to install into a new environment, run::

    conda create -n envname strip_it

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/strip_it:<tag>

(see `strip_it/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_strip_it| image:: https://img.shields.io/conda/dn/bioconda/strip_it.svg?style=flat
   :target: https://anaconda.org/bioconda/strip_it
   :alt:   (downloads)
.. |docker_strip_it| image:: https://quay.io/repository/biocontainers/strip_it/status
   :target: https://quay.io/repository/biocontainers/strip_it
.. _`strip_it/tags`: https://quay.io/repository/biocontainers/strip_it?tab=tags


.. raw:: html

    <script>
        var package = "strip_it";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strip_it/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strip_it/README.html