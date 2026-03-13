:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 's3gof3r'
.. highlight: bash

s3gof3r
=======

.. conda:recipe:: s3gof3r
   :replaces_section_title:
   :noindex:

   Fast\, concurrent\, streaming access to Amazon S3\, including gof3r\, a CLI

   :homepage: https://github.com/rlmcpherson/s3gof3r
   :license: MIT
   :recipe: /`s3gof3r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/s3gof3r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/s3gof3r/meta.yaml>`_

   


.. conda:package:: s3gof3r

   |downloads_s3gof3r| |docker_s3gof3r|

   :versions:
      
      

      ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``

      

   

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

    pixi global install s3gof3r

to add into an existing workspace instead, run::

    pixi add s3gof3r

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install s3gof3r

Alternatively, to install into a new environment, run::

    conda create -n envname s3gof3r

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/s3gof3r:<tag>

(see `s3gof3r/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_s3gof3r| image:: https://img.shields.io/conda/dn/bioconda/s3gof3r.svg?style=flat
   :target: https://anaconda.org/bioconda/s3gof3r
   :alt:   (downloads)
.. |docker_s3gof3r| image:: https://quay.io/repository/biocontainers/s3gof3r/status
   :target: https://quay.io/repository/biocontainers/s3gof3r
.. _`s3gof3r/tags`: https://quay.io/repository/biocontainers/s3gof3r?tab=tags


.. raw:: html

    <script>
        var package = "s3gof3r";
        var versions = ["0.5.0","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/s3gof3r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/s3gof3r/README.html